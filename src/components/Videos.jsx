import React from "react"
import { Stack, Box } from "@mui/material"
import { ChannelCard, VideoCard } from "./"

const Videos = ({ videos, direction ,marginLeft}) => {
  if (!videos?.length) return "Loding..."
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      sx={{marginLeft}} 
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
