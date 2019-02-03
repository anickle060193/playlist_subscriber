import React = require( 'react' );
import { Paper, Avatar, Typography, TextField, Button, createStyles, WithStyles, Theme, withStyles, CircularProgress } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const styles = ( theme: Theme ) => createStyles( {
  paper: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2
  },
  submitProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  signUpLink: {
    marginTop: theme.spacing.unit * 2
  }
} );

type Props = WithStyles<typeof styles>;

interface State
{
  loginPage: boolean;
  loading: boolean;
}

class AuthPage extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    loginPage: true,
    loading: false
  };

  public render()
  {
    const { classes } = this.props;
    const { loginPage, loading } = this.state;

    const actionText = loginPage ? 'Log In' : 'Sign Up';

    return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {actionText}
        </Typography>
        <form
          className={classes.form}
          onSubmit={loginPage ? this.onLoginSubmit : this.onSignUpSubmit}
        >
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            label="Username"
            type="text"
            autoComplete="username"
            autoFocus={true}
            name="username"
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            label="Password"
            type="password"
            autoComplete={loginPage ? 'current-password' : 'new-password'}
            name="password"
            inputProps={{
              minLength: loginPage ? undefined : 8
            }}
          />
          {!loginPage && (
            <TextField
              margin="normal"
              required={true}
              fullWidth={true}
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              name="password"
              inputProps={{
                minLength: 8
              }}
            />
          )}
          <Button
            className={classes.submit}
            type="submit"
            fullWidth={true}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {actionText}
            {loading && (
              <CircularProgress size={24} className={classes.submitProgress} />
            )}
          </Button>
          {loginPage ?
            (
              <Typography variant="body2" className={classes.signUpLink}>
                New here? <Button key="sign_up" href="#!" variant="text" size="small" onClick={this.onSignUpLinkClick}>Sign up!</Button>
              </Typography>
            ) :
            (
              <Typography variant="body2" className={classes.signUpLink}>
                Already have an account? <Button key="log_in" href="#!" variant="text" size="small" onClick={this.onLoginLinkClick}>Log In!</Button>
              </Typography>
            )}
        </form>
      </Paper>
    );
  }

  private onSignUpLinkClick = ( e: React.MouseEvent ) =>
  {
    e.preventDefault();

    this.setState( { loginPage: false } );
  }

  private onLoginLinkClick = ( e: React.MouseEvent ) =>
  {
    e.preventDefault();

    this.setState( { loginPage: true } );
  }

  private onLoginSubmit = ( e: React.FormEvent ) =>
  {
    console.log( 'LOGIN SUBMIT' );
    e.preventDefault();

    this.setState( { loading: true } );
    window.setTimeout( () =>
    {
      this.setState( { loading: false } );
    }, 3000 );
  }

  private onSignUpSubmit = ( e: React.FormEvent ) =>
  {
    console.log( 'SIGN UP SUBMIT' );
    e.preventDefault();

    this.setState( { loading: true } );
    window.setTimeout( () =>
    {
      this.setState( { loading: false } );
    }, 3000 );
  }
}

export default withStyles( styles )( AuthPage );
