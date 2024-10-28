import { Tweet } from "@/types/tweet"
import { faSlackHash } from "@fortawesome/free-brands-svg-icons/faSlackHash"
import { faComment, faEye, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faArrowUp19, faDownLeftAndUpRightToCenter, faRetweet } from "@fortawesome/free-solid-svg-icons"
import { faEarListen } from "@fortawesome/free-solid-svg-icons/faEarListen"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
    tweet: Tweet
}

export const TweetItem = ({ tweet}: Props) =>{
    return(
        <div className="flex gap-2 p-6 border-b-2 border-gray-900 ">
            <div>
                <Link href={`/${tweet.user.slug}`}>
                    <img
                        src={tweet.user.avatar}
                        alt={tweet.user.name}
                        className="size-10 rounded-full"
                    />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3">
                    <div className="font-bold text-lg">
                        <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
                    </div>
                    <div className="text-xs text-gray-500">@{tweet.user.slug}</div>
                </div>
                <div className="py-4 text-lg">{tweet.body}</div>
                {tweet.image &&
                    <div className="w-full">
                        <img
                            src={tweet.image}
                            alt=""
                            className="w-full rounded-2xl"
                        />
                    </div>
                }

                <div className="flex mt-3 text-gray-500">
                    <div className="flex-1">
                        <Link href={`/tweet/${tweet.id}`}>
                            <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faComment} className="size-3"/>
                                <div className="text-sm">{tweet.commentCount}</div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-1">
                    <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faRetweet} className="size-3"/>
                                <div className="text-sm">{tweet.retweetCount}</div>
                            </div>
                    </div>
                    <div className="flex-1">
                    <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faHeart} className="size-3"/>
                                <div className="text-sm">{tweet.likeCount}</div>
                            </div>
                    </div>
                    <div className="flex-1">
                            <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faEye} className="size-3"/>
                                <div className="text-sm">{tweet.commentCount}</div>
                            </div>
                    </div>
                    <div className="flex-1 inline-flex ">
                        <div className="">
                            <div className="inline-flex items-center mr-1 gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faEarListen} className="size-3"/>
                                <div className="text-sm">{tweet.retweetCount}</div>
                            </div>
                        </div>
                        <div className="">

                            <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faArrowUp19} className="size-3"/>
                                <div className="text-sm">{tweet.retweetCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}