import { HomeHeader } from "@/components/home/home-header";
import { TwitPost } from "@/components/tweet/twit-post";
import { HomeFeed } from "./home-feed";

export default function Page() {

    return (
        <div>
            <HomeHeader/>
            <TwitPost />
            <HomeFeed />
        </div>
    )
}