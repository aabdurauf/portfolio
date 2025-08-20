import { MutatingDots } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="dark:bg-primary bg-primaryLight h-screen flex items-center justify-center">
      <MutatingDots
        color="#ec4899"
        secondaryColor="#ec4899"
      />
    </div>
  )
}

export default Loading