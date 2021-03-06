import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import classNames from 'classnames';
import
{
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Tooltip,
  Button
} from '@material-ui/core';
import { TooltipProps } from '@material-ui/core/Tooltip';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SettingsIcon from '@material-ui/icons/Settings';

import HomePage from 'main/components/HomePage';
import SubscriptionsPage from 'main/components/SubscriptionsPage';
import SettingsPage from 'main/components/SettingsPage';

import { storage, StorageKey } from 'common/storage';

import { retrieveYoutubeAuthToken } from 'store/reducers/youtubeApi';

import { Resource } from 'utils/resource';

const drawerWidth = 240;

const styles = ( theme: Theme ) => createStyles( {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create( [ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    } ),
  },
  menuButton: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    } ),
  },
  drawerClose: {
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    } ),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1
  },
  drawerList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  drawerGrow: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  toolbarOffset: theme.mixins.toolbar,
  content: {
    flex: 1,
    width: '100%',
    minWidth: 0,
    minHeight: 0,
    overflow: 'hidden'
  }
} );

const enum PagePath
{
  Home = '/home',
  Subscriptions = '/subscriptions',
  Settings = '/settings',
}

const PAGES: Array<{ path: PagePath, component: React.ComponentType<{}> }> = [
  { path: PagePath.Home, component: HomePage },
  { path: PagePath.Subscriptions, component: SubscriptionsPage },
  { path: PagePath.Settings, component: SettingsPage },
];

const HideableTooltip: React.SFC<TooltipProps & { enabled: boolean }> = ( { enabled, ...props } ) => (
  enabled ?
    (
      <Tooltip {...props} />
    ) :
    (
      props.children
    )
);

interface PageDrawerEntryProps
{
  path: PagePath;
  label: string;
  drawerOpen: boolean;
  currentPathName: string;
  IconComponent: React.ComponentType<SvgIconProps>;
}

const PageDrawerEntry: React.SFC<PageDrawerEntryProps> = ( { path, label, drawerOpen, currentPathName, IconComponent } ) => (
  <HideableTooltip
    title={label}
    placement="right"
    enabled={!drawerOpen}
  >
    <ListItem
      button={true}
      selected={currentPathName === path}
      component={( { innerRef, ...props } ) => <Link {...props} to={path} />}
    >
      <ListItemIcon>
        <IconComponent color={( currentPathName === path ) ? 'secondary' : 'inherit'} />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  </HideableTooltip>
);

interface PropsFromState
{
  token: Resource<string>;
}

interface PropsFromDispatch
{
  retrieveYoutubeAuthToken: ( interactive: boolean ) => Promise<string>;
}

type OwnProps = RouteComponentProps;

interface State
{
  drawerOpen: boolean;
}

type Props = PropsFromState & PropsFromDispatch & OwnProps & WithStyles<typeof styles, true>;

class Main extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    drawerOpen: true
  };

  public async componentDidMount()
  {
    storage.set( StorageKey.Other__LastViewTime, new Date().getTime() );

    // try
    // {
    //   let token = await this.props.retrieveYoutubeAuthToken( false );
    //   console.log( 'Youtube Token:', token );
    // }
    // catch( e )
    // {
    //   console.warn( 'Could not silently retrieve Youtube token:', e );
    // }
  }

  public render()
  {
    const { classes, theme, token } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label={drawerOpen ? 'Close drawer' : 'Open drawer'}
              onClick={drawerOpen ? this.onDrawerClose : this.onDrawerOpen}
              className={classes.menuButton}
            >
              {drawerOpen ?
                (
                  theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />
                ) :
                (
                  <MenuIcon />
                )}
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap={true}>
              Playlist Subscriber
            </Typography>
            <span className={classes.grow} />
            {!token.item && false && (
              <Button
                color="inherit"
                className={classes.menuButton}
                onClick={this.onYoutubeSignInClick}
                disabled={token.loading}
              >
                Sign In to YouTube
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames( classes.drawer, {
            [ classes.drawerOpen ]: drawerOpen,
            [ classes.drawerClose ]: !drawerOpen,
          } )}
          classes={{
            paper: classNames( {
              [ classes.drawerOpen ]: drawerOpen,
              [ classes.drawerClose ]: !drawerOpen,
            } ),
          }}
          open={drawerOpen}
        >
          <div className={classes.toolbarOffset} />
          <Divider />
          <List className={classes.drawerList}>
            <PageDrawerEntry
              path={PagePath.Home}
              label="Home"
              drawerOpen={drawerOpen}
              currentPathName={this.props.location.pathname}
              IconComponent={HomeIcon}
            />
            <PageDrawerEntry
              path={PagePath.Subscriptions}
              label="Subscriptions"
              drawerOpen={drawerOpen}
              currentPathName={this.props.location.pathname}
              IconComponent={SubscriptionsIcon}
            />
            <div className={classes.drawerGrow} />
            <PageDrawerEntry
              path={PagePath.Settings}
              label="Settings"
              drawerOpen={drawerOpen}
              currentPathName={this.props.location.pathname}
              IconComponent={SettingsIcon}
            />
          </List>
        </Drawer>
        <main className={classes.contentContainer}>
          <div className={classes.toolbarOffset} />
          <div className={classes.content}>
            <Switch>
              {PAGES.map( ( { path, component } ) => (
                <Route key={path} path={path} component={component} />
              ) )}
              <Redirect to={PagePath.Home} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }

  private onDrawerOpen = () =>
  {
    this.setState( { drawerOpen: true } );
  }

  private onDrawerClose = () =>
  {
    this.setState( { drawerOpen: false } );
  }

  private onYoutubeSignInClick = async () =>
  {
    try
    {
      let token = await this.props.retrieveYoutubeAuthToken( true );
      console.log( 'Youtube Token:', token );
    }
    catch( e )
    {
      console.error( 'Failed to retrieve Youtube token:', e );
    }
  }
}

export default withRouter( connect<PropsFromState, PropsFromDispatch, OwnProps, RootState>(
  ( state ) => ( {
    token: state.youtubeApi.token
  } ),
  {
    retrieveYoutubeAuthToken: thunkToAction( retrieveYoutubeAuthToken.action )
  }
)( withStyles( styles, { withTheme: true } )( Main ) ) );
