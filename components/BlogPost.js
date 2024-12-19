export function BlogPost({ title, content, date }) {
  return (
    <div className="blog-post bg-white/10 p-6 rounded-lg mb-4">
      <h2 className="text-2xl text-white mb-2">{title}</h2>
      <p className="text-gray-300">{content}</p>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  )
} 