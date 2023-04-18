import s from './transparent-video.module.scss'

// export function TransparentVideo({ colorVideoSrc, alphaMaskSrc }) {
//   const colorVideoRef = useRef(null)
//   const alphaMaskRef = useRef(null)
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const colorVideo = colorVideoRef.current
//     const alphaMask = alphaMaskRef.current
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')

//     let animationFrameId

//     const render = () => {
//       canvas.width = colorVideo.videoWidth
//       canvas.height = colorVideo.videoHeight

//       // Draw the alpha mask video frame on an offscreen canvas
//       const offscreenCanvas = new OffscreenCanvas(colorVideo.videoWidth, colorVideo.videoHeight)
//       const offscreenCtx = offscreenCanvas.getContext('2d')
//       offscreenCtx.drawImage(alphaMask, 0, 0)

//       // Get the image data from the alpha mask offscreen canvas
//       const alphaData = offscreenCtx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height).data

//       // Draw the color video frame on the canvas
//       ctx.drawImage(colorVideo, 0, 0)

//       // Get the image data from the color video frame
//       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//       const data = imageData.data

//       // Apply the alpha mask to the color video frame
//       for (let i = 0, len = data.length; i < len; i += 4) {
//         data[i + 3] = alphaData[i]
//       }

//       // Put the processed image data back onto the canvas
//       ctx.putImageData(imageData, 0, 0)

//       animationFrameId = requestAnimationFrame(render)
//     }

//     const startRendering = () => {
//       if (
//         colorVideo.readyState === colorVideo.HAVE_ENOUGH_DATA &&
//         alphaMask.readyState === alphaMask.HAVE_ENOUGH_DATA
//       ) {
//         colorVideo.play()
//         alphaMask.play()
//         render()
//       }
//     }

//     colorVideo.addEventListener('canplay', startRendering)
//     alphaMask.addEventListener('canplay', startRendering)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//       colorVideo.removeEventListener('canplay', startRendering)
//       alphaMask.removeEventListener('canplay', startRendering)
//     }
//   }, [])

//   return (
//     <>
//       <video className={s.video} ref={colorVideoRef} src={colorVideoSrc} loop autoPlay={true} muted />
//       <video className={s.video} ref={alphaMaskRef} src={alphaMaskSrc} loop autoPlay={true} muted />
//       <canvas className={s.canvas} ref={canvasRef} />
//     </>
//   )
// }

export function TransparentVideo({ src, alphaMask }) {
  return (
    <div className={s.wrapper}>
      <video className={s.video} src={src} autoPlay loop muted />
      <video className={s.mask} src={alphaMask} autoPlay loop muted />
    </div>
  )
}

export default TransparentVideo
