import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 122,
    user: user,
    body: "Rotina de um Dev!",
    image: '/dev3.jpg',
    likeCount: 3455,
    commentCount: 398,
    retweetCount: 55,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}