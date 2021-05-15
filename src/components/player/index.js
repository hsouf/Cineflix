import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FullScreenIcon from '@material-ui/icons/Fullscreen';
import ReplayIcon from '@material-ui/icons/Replay';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import screenfull from 'screenfull';

import { Container, Inner, ControlsWrapper, Controls } from './styles/player';
import * as Colors from '../../constants/colors';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    if (value !== null && value.volume !== 0) ref.current = value;
  });
  return ref.current;
};

const useStyles = makeStyles({
  middleButton: {
    color: '#ddd',
    fontSize: 120,
    transform: 'scale(0.9)',
    '&:hover': {
      color: '#fff',
      transform: 'scale(1)',
    },
  },
  bottomButton: {
    color: '#ddd',
    fontSize: 40,
    '&:hover': {
      color: '#fff',
    },
  },
  reactPlayer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PrettoSlider = withStyles({
  root: {
    color: Colors.TERTIARY_COLOR,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '4px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 2,
  },
  rail: {
    height: 8,
    borderRadius: 2,
  },
})(Slider);

const VolumeSlider = withStyles({
  root: {
    color: Colors.TERTIARY_COLOR,
    height: 2,
    width: 100,
  },
  active: {},
})(Slider);

const TertiaryColorTypography = withStyles({
  root: {
    color: Colors.TERTIARY_COLOR,
  },
})(Typography);

const ValueLabelComponent = (props) => {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

export default function Player({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

let idleTime = 0;

Player.Video = function PlayerVideo({ onFullscreen, src, ...otherProps }) {
  const classes = useStyles();
  const [timeDisplayFormat, setTimeDisplayFormat] = useState('normal');

  const [state, setState] = useState({
    playing: true,
    volume: 0.7,
    muted: false,
    playbackRate: 1,
    fullscreen: false,
    played: 0,
    seeking: false,
    ended: false,
  });

  const { volume } = state;
  const prevVolume = usePrevious({ volume })?.volume;

  const playerRef = useRef(null);
  const controlRef = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleRatePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const CloseRatePopover = () => {
    setAnchorEl(null);
  };

  const togglePlay = () => {
    if (state.ended) {
      setState({ ...state, playing: true, ended: false });
      playerRef.current.seekTo(0);
    } else setState({ ...state, playing: !state.playing });
  };

  const handleVolume = (event, value) => {
    setState({ ...state, volume: parseFloat(value / 100), muted: value === 0 });
  };

  const toggleMute = () => {
    setState({ ...state, muted: !state.muted, volume: state.muted ? prevVolume : 0 });
  };

  const handlePlaybackRate = (value) => {
    setState({ ...state, playbackRate: value });
    CloseRatePopover();
  };

  const toggleFullscreen = () => {
    setState({ ...state, fullscreen: !state.fullscreen });
    screenfull.toggle();
    onFullscreen();
  };

  const handleProgress = (changeState) => {
    if (idleTime > 0) {
      controlRef.current.style.visibility = 'hidden';
      idleTime = 0;
    }
    if (controlRef.current.style.visibility === 'visible') idleTime += 1;

    if (!state.seeking) setState({ ...state, ...changeState });
  };

  const handleTimeSeek = (event, value) => {
    setState({ ...state, played: parseFloat(value / 100) });
  };

  const handleSeekMouseDown = (event) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (event, value) => {
    setState({ ...state, seeking: false, ended: false });
    playerRef.current.seekTo(value / 100);
  };

  const handleMouseMove = () => {
    controlRef.current.style.visibility = 'visible';
    idleTime = 0;
  };

  const handleMediaEnd = () => {
    setState({ ...state, ended: true });

    controlRef.current.style.visibility = 'visible';
  };

  const handleTimeFormat = () => {
    setTimeDisplayFormat(timeDisplayFormat === 'normal' ? 'remaining' : 'normal');
  };

  const formatTime = (seconds) => {
    if (seconds === undefined || Number.isNaN(seconds)) return '00:00';

    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');

    if (hh) return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;

    return `${mm}:${ss}`;
  };

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : '00:00';
  const duration = playerRef.current ? playerRef.current.getDuration() : '00:00';

  const elapsedTime =
    timeDisplayFormat === 'normal' ? formatTime(currentTime) : `-${formatTime(duration - currentTime)}`;
  const totalDuration = formatTime(duration);

  const open = Boolean(anchorEl);
  const id = open ? 'playbackrate-popover' : undefined;

  return (
    <>
      <Inner style={state.fullscreen ? { width: '100%' } : { width: '76%' }} {...otherProps}>
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          className={classes.reactPlayer}
          playing={state.playing}
          volume={state.volume}
          muted={state.muted}
          playbackRate={state.playbackRate}
          onProgress={handleProgress}
          onEnded={handleMediaEnd}
          url={src}
        />
      </Inner>
      <ControlsWrapper onMouseMove={handleMouseMove} style={state.fullscreen ? { width: '100%' } : { width: '76%' }}>
        <Controls ref={controlRef}>
          <Grid container direction="row" alignItems="center" justify="space-between" style={{ padding: 28 }}>
            <Grid item>
              <Typography variant="h5" style={{ color: '#fff' }}>
                Movie Title
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="center">
            <IconButton onClick={togglePlay} className={classes.middleButton} aria-label="play">
              {state.ended ? (
                <ReplayIcon fontSize="inherit" />
              ) : state.playing ? (
                <PauseIcon fontSize="inherit" />
              ) : (
                <PlayArrowIcon fontSize="inherit" />
              )}
            </IconButton>
          </Grid>

          <Grid container direction="row" justify="space-between" alignItems="center" style={{ padding: 24 }}>
            <Grid item xs={12}>
              <PrettoSlider
                min={0}
                max={100}
                value={state.played * 100}
                ValueLabelComponent={(props) => <ValueLabelComponent {...props} value={elapsedTime} />}
                onChange={handleTimeSeek}
                onMouseDown={handleSeekMouseDown}
                onChangeCommitted={handleSeekMouseUp}
              />
            </Grid>

            <Grid item>
              <Grid container alignItems="center" direction="row">
                <IconButton onClick={togglePlay} className={classes.bottomButton}>
                  {state.ended ? (
                    <ReplayIcon fontSize="inherit" />
                  ) : state.playing ? (
                    <PauseIcon fontSize="inherit" />
                  ) : (
                    <PlayArrowIcon fontSize="inherit" />
                  )}
                </IconButton>

                <IconButton onClick={toggleMute} className={classes.bottomButton}>
                  {state.muted ? <VolumeOffIcon fontSize="inherit" /> : <VolumeUpIcon fontSize="inherit" />}
                </IconButton>

                <VolumeSlider min={0} max={100} defaultValue={70} onChange={handleVolume} value={state.volume * 100} />

                <Button onClick={handleTimeFormat} variant="text" style={{ color: '#fff', marginLeft: 16 }}>
                  <Typography>
                    {elapsedTime} / {totalDuration}
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid item>
              <Button onClick={handleRatePopover} variant="text" className={classes.bottomButton}>
                <Typography>{state.playbackRate}X</Typography>
              </Button>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={CloseRatePopover}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <Grid container direction="column-reverse">
                  {[0.5, 1, 1.5, 2].map((rate, key) => (
                    <Button onClick={() => handlePlaybackRate(rate)} key={key} variant="text">
                      <TertiaryColorTypography fontWeight={rate === state.playbackRate ? 'bold' : 'normal'}>
                        {rate}
                      </TertiaryColorTypography>
                    </Button>
                  ))}
                </Grid>
              </Popover>

              <IconButton onClick={toggleFullscreen} className={classes.bottomButton}>
                <FullScreenIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Controls>
      </ControlsWrapper>
    </>
  );
};
