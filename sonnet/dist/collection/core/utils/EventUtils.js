export class EventUtils {
}
EventUtils.now = (ev) => {
    return ev.timeStamp || Date.now();
};
