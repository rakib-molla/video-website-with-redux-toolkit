
import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";


export default function Video() {
    const { videoId } = useParams();

    const dispatch = useDispatch();
    const { video, isLoading, isError, error } = useSelector((state) => state.video);
    const {id,link, title, tags} = video || {}
    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId]);

    // decide what to render
    let content = null;
    if (isLoading) content = <Loading />

    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isLoading && !isError && !video?.id) {
        content = <div className="col-span-12">No Video Found!</div>;
    }

    if (!isLoading && !isError && video?.id) {
        content =
            (<div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    <VideoPlayer link={link} title={title}/>

                    {/* <!-- video description --> */}
                    <VideoDescription video={video}/>
                </div>

                {/* <!-- related videos --> */}
                <RelatedVideoList currentVideoId={id} tags={tags}/>
            </div>)
    }
    

    return (

        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>

    )
}