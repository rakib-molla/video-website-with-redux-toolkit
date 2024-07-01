import React from 'react'
import like from '../../assets/like.svg';
import unLike from '../../assets/unlike.svg';

function LikeUnlike({likes, unlikes}) {
    return (
        <div>
            <div className="flex gap-10 w-48">
                <div className="flex gap-1">
                    <div className="shrink-0">
                        <img
                            className="w-5 block cursor-pointer"
                            src={like}
                            alt="Like"
                        />
                    </div>
                    <div
                        className="text-sm leading-[1.7142857] text-slate-600"
                    >
                        {likes}
                    </div>
                </div>
                <div className="flex gap-1">
                    <div className="shrink-0">
                        <img
                            className="w-5 block cursor-pointer"
                            src={unLike}
                            alt="Unlike"
                        />
                    </div>
                    <div
                        className="text-sm leading-[1.7142857] text-slate-600"
                    >
                        {unlikes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeUnlike
