export function assertNever( value: never )
{
  console.error( 'assertNever:', value );
  throw new Error( 'Never assertion failed: ' + value );
}
