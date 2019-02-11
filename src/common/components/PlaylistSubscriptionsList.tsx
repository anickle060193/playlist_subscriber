import React = require( 'react' );
import
{
  withStyles,
  WithStyles,
  Theme,
  createStyles,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
  Paper
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';

import NoReferrerAnchor from 'common/components/NoReferrerAnchor';

import { getYoutubeAvatarThumbnail } from 'utils/youtube_api_types';

const styles = ( theme: Theme ) => createStyles( {
  list: {
    maxHeight: 500,
    overflow: 'auto'
  },
  listItemText: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'normal',
    lineClamp: 2
  },
  removeButton: {
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
} );

type Props = WithPlaylistsProps & WithStyles<typeof styles>;

class PlaylistSubscriptionsList extends React.PureComponent<Props>
{
  public render()
  {
    const { classes, playlistSubscriptions, youtubePlaylists } = this.props;

    return (
      <Paper>
        <List className={classes.list}>
          {( playlistSubscriptions.length === 0 ) ?
            (
              <ListItem>
                <ListItemText primary="No playlist subscriptions" />
              </ListItem>
            ) :
            (
              playlistSubscriptions.map( ( playlistId ) =>
              {
                let playlist = youtubePlaylists.items[ playlistId ];

                let text = playlistId;
                let thumbnail = (
                  <Avatar>
                    <PlayArrowIcon />
                  </Avatar>
                );

                if( playlist )
                {
                  text = playlist.snippet.title;

                  let avatarThumbnail = getYoutubeAvatarThumbnail( playlist.snippet.thumbnails );
                  if( avatarThumbnail )
                  {
                    thumbnail = (
                      <Avatar
                        alt={text}
                        src={avatarThumbnail.url}
                      />
                    );
                  }
                }

                return (
                  <ListItem
                    key={playlistId}
                    button={true}
                    component={NoReferrerAnchor}
                    href={`https://www.youtube.com/playlist?list=${playlistId}`}
                  >
                    <ListItemAvatar>
                      {thumbnail}
                    </ListItemAvatar>
                    <ListItemText
                      primary={text}
                      classes={{
                        primary: classes.listItemText
                      }}
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="Remove" placement="left" enterDelay={500}>
                        <IconButton
                          className={classes.removeButton}
                          onClick={() => this.onRemovePlaylist( playlistId )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              } )
            )}
        </List>
      </Paper>
    );
  }

  private onRemovePlaylist = ( playlistId: string ) =>
  {
    console.log( 'Remove playlist subscription:', playlistId );

    let playlistSubscriptions = this.props.playlistSubscriptions.filter( ( id ) => id !== playlistId );

    this.props.setPlaylistSubscriptions( playlistSubscriptions );
  }
}

export default withPlaylists( withStyles( styles )( PlaylistSubscriptionsList ), false );
