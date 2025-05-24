const EmptyState = () => {
  return (
    <div className="bg-background mx-5 border-2 border-slate-500 border-dashed rounded-[5px] flex flex-col items-center justify-center min-h-[180px]">
      <p className="text-sm text-slate-500 text-center p-5">Hooray, no active tasks!</p>
    </div>
  )
}

export default EmptyState