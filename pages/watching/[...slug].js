import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import WatchingContainer from "../../components/watch/watchingContainer";
import { watchingDataAction } from "../../redux/actions/watchingDataAction";

import { URL } from "../../utils/URLS";
const Recently = () => {
  const { data } = useSelector((state) => state);
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      var WatchingURL = URL.EPLINK + slug[0] + "-episode-" + slug[1];
      dispatch(watchingDataAction(WatchingURL));
    }
  }, [slug]);

  return (
    <>
    <br/><br/>
    <Layout title={"Watching " + slug?.[0]}>
      {slug && <WatchingContainer data={data} slug={slug} />}
    </Layout>
    <br/>
    <br/>
    <br/>
    </>
  );
};

export default Recently;
