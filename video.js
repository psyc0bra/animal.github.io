/**
 * 
 * @param {string} initialVid 
 * @param {string} loopVid 
 * @param {number} scale 
 * @param {string, number} right 
 */

export default (initialVid, loopVid, scale, right, rf) => {
    rf.playVideo(initialVid, false);
    rf.endEventListener(loopVid);
    const vref = rf.$refs.videoRef;
    vref.style.transform = `scale(${scale})`;
    vref.style.right = right;
}
