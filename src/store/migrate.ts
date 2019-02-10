import { PersistedState, createMigrate, MigrationManifest } from 'redux-persist';

import { Version, UserDataTypes, PreviousVersions, MIGRATORS } from 'utils/user_data';

interface UserPersistedState<V extends Version> extends PersistedState
{
  user: UserDataTypes[ V ];
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
};

export const migrate = createMigrate( MIGRATIONS as unknown as MigrationManifest, { debug: process.env.NODE_ENV === 'development' } );
