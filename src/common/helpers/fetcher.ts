import instance from "utils/api/instance";

const fetcher = (url: string) => instance.get(url).then((res) => res.data);
export default fetcher;
