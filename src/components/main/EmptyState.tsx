const EmptyState = () => {
  return (
    <div className="bg-background w-5/6 mx-auto border-2 border-slate-600 border-dashed rounded-[5px] flex flex-col items-center justify-center min-h-[180px]">
      <p className="text-sm text-slate-600 text-center p-5">Hooray, no active tasks!</p>
    </div>
  )
}

export default EmptyState