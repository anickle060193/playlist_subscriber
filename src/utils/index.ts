export function assertNever( value: never )
{
  console.error( 'assertNever:', value );
  throw new Error( 'Never assertion failed: ' + value );
}

export function addItemToStateSet<T>( set: Set<T>, value: T ): Set<T>
{
  let newSet = new Set( set );
  newSet.add( value );
  return newSet;
}

export function removeItemFromStateSet<T>( set: Set<T>, value: T ): Set<T>
{
  let newSet = new Set( set );
  newSet.delete( value );
  return newSet;
}
