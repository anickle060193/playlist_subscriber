import { PersistedState, createMigrate, MigrationManifest } from 'redux-persist';

import { Version, StoredDataTypes, PreviousVersions, MIGRATORS } from 'utils/stored_data';

interface UserPersistedState<V extends Version> extends PersistedState
{
  user: StoredDataTypes[ V ];
}

export const MIGRATIONS: { [ version in Version ]: ( userData: UserPersistedState<PreviousVersions[ version ]> ) => UserPersistedState<version> } = {
  [ Version.V0 ]: ( state ) => ( {
    ...state,
    user: MIGRATORS[ Version.V0 ]( state.user )
  } ),
  [ Version.V1 ]: ( state ) => ( {
    ...state,
    user: MIGRATORS[ Version.V1 ]( state.user )
  } ),
  [ Version.V2 ]: ( state ) => ( {
    ...state,
    user: MIGRATORS[ Version.V2 ]( state.user )
  } ),
  [ Version.V3 ]: ( state ) => ( {
    ...state,
    user: MIGRATORS[ Version.V3 ]( state.user )
  } ),
  [ Version.V4 ]: ( state ) => ( {
    ...state,
    user: MIGRATORS[ Version.V4 ]( state.user )
  } ),
};

export const migrate = createMigrate( MIGRATIONS as unknown as MigrationManifest, { debug: process.env.NODE_ENV === 'development' } );
