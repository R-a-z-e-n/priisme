
import React from 'react';
import { videos } from '../services/mockData';
import type { Video } from '../types';

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
    <div className="relative h-full w-full snap-start rounded-lg overflow-hidden">
        <video 
            src={video.videoUrl} 
            loop 
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <div className="flex items-center mb-2">
                <img src={video.avatarUrl} alt={video.user} className="w-10 h-10 rounded-full border-2 border-white" />
                <p className="ml-3 font-bold text-white">{video.user}</p>
            </div>
            <p className="text-white text-sm">{video.description}</p>
        </div>
    </div>
);


const VideoPage: React.FC = () => {
    return (
        <div className="h-[calc(100vh-8rem)] bg-black">
            <div className="relative h-full w-full max-w-md mx-auto snap-y snap-mandatory overflow-y-scroll">
                {videos.map(video => <VideoCard key={video.id} video={video} />)}
            </div>
        </div>
    );
};

export default VideoPage;
