package simulation_test

import (
	"fmt"
	"testing"
	"time"

	"cosmossdk.io/depinject"
	"cosmossdk.io/log"
	"cosmossdk.io/x/evidence/keeper"
	"cosmossdk.io/x/evidence/simulation"
	"cosmossdk.io/x/evidence/testutil"
	"cosmossdk.io/x/evidence/types"
	"github.com/stretchr/testify/require"

	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/kv"
)

func TestDecodeStore(t *testing.T) {
	var evidenceKeeper keeper.Keeper
	err := depinject.Inject(depinject.Configs(
		testutil.AppConfig,
		depinject.Supply(log.NewNopLogger()),
	), &evidenceKeeper)
	require.NoError(t, err)

	dec := simulation.NewDecodeStore(evidenceKeeper)

	delPk1 := ed25519.GenPrivKey().PubKey()

	ev := &types.Equivocation{
		Height:           10,
		Time:             time.Now().UTC(),
		Power:            1000,
		ConsensusAddress: sdk.ConsAddress(delPk1.Address()).String(),
	}

	evBz, err := evidenceKeeper.MarshalEvidence(ev)
	require.NoError(t, err)

	kvPairs := kv.Pairs{
		Pairs: []kv.Pair{
			{
				Key:   types.KeyPrefixEvidence,
				Value: evBz,
			},
			{
				Key:   []byte{0x99},
				Value: []byte{0x99},
			},
		},
	}
	tests := []struct {
		name        string
		expectedLog string
	}{
		{"Evidence", fmt.Sprintf("%v\n%v", ev, ev)},
		{"other", ""},
	}

	for i, tt := range tests {
		i, tt := i, tt
		t.Run(tt.name, func(t *testing.T) {
			switch i {
			case len(tests) - 1:
				require.Panics(t, func() { dec(kvPairs.Pairs[i], kvPairs.Pairs[i]) }, tt.name)
			default:
				require.Equal(t, tt.expectedLog, dec(kvPairs.Pairs[i], kvPairs.Pairs[i]), tt.name)
			}
		})
	}
}
