import React, { useRef } from 'react';
import './Posts.css';
import posts from '../../../data/posts/posts.json';
import { ArrowUpward, MoreHoriz } from '@material-ui/icons';
import { ArrowDownward } from '@material-ui/icons';
import Button from '../../button/Button';
import { ThumbUp } from '@material-ui/icons';
import { ModeComment } from '@material-ui/icons';
import { Share } from '@material-ui/icons';
import Video from '../../video/Video';

export default function Posts(){
    const videoRef = useRef(null);

    return(
        <div className='post-wrapper'>
            {posts.map((post,index) =>(
                        <div className='post' key={index} >
                            <div className='post-sidebar'>
                                <ArrowUpward className='upvote'/>
                                <span>{post.upvotes}</span>
                                <ArrowDownward className='downvote'/>
                            </div>
                            <div className='post-title'>
                                <img src={post.subreddit.image_src} alt=''/>
                                <span className='subreddit-name'>r/{post.subreddit.name}</span>
                                <span className='post-user'>Posted by </span>
                                <span className='post-user underline'>u/{post.username}</span>
                                <div className='spacer'></div>
                                <Button primary label='+ JOIN' className='button'/>
                            </div>
                            <div className='post-body'>
                                <span className='title'>{post.title}</span>
                                {post.video_src && <Video video_src={post.video_src} duration={post.duration} videoRef={videoRef}/>}
                                {post.image_src && <img src={post.image_src} alt=''/>}
                                {post.description && <span className='description'>{post.description}</span>}
                            </div>
                            <div className='post-footer footer-action'>
                                <div className='like footer-action'>
                                    <ThumbUp className='like-icon'/>
                                    <span>Like</span>
                                </div>
                                <div className='comments footer-action'>
                                    <ModeComment className='comments-icon'/>
                                    <span>{post.comments} Comments</span>
                                </div>
                                <div className='share footer-action'>
                                    <Share />
                                    <span>share</span>
                                </div>
                                <div>
                                    <MoreHoriz className='more-icon footer-action'/>
                                </div>
                            </div>
                        </div>
                    )
                )}
        </div>
    )
}