import { useState, useRef } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [link, setLink] = useState("");
  const [picture, setPicture] = useState("");
  const [references, setReferences] = useState([""]);
  const [post, setPost] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textAreaRef = useRef(null);

  const handleAddReference = () => {
    setReferences([...references, ""]);
  };

  const handleRemoveReference = (index) => {
    if (references.length > 1) {
      const updated = references.filter((_, i) => i !== index);
      setReferences(updated);
    }
  };

  const handleReferenceChange = (index, value) => {
    const updated = [...references];
    updated[index] = value;
    setReferences(updated);
  };

  const handleSubmit = async () => {
    if (title.trim() === "" || bodyText.trim() === "") {
      alert("Please fill in both title and content fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setPost([{ title, bodyText, link, picture, references }, ...post]);
      setTitle("");
      setBodyText("");
      setLink("");
      setPicture("");
      setReferences([""]);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F2F6FE] px-4 sm:px-6 md:px-8 py-6 md:py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center sm:text-left">
            Create Post
          </h1>

          <div className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter your post title"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-200"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
              />
              <div className="text-xs text-gray-500 mt-1">
                {title.length}/100 characters
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                id="content"
                ref={textAreaRef}
                placeholder="Write your content here..."
                className="w-full min-h-[120px] sm:min-h-[150px] px-4 py-3 border border-gray-300 rounded-xl text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-200"
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                maxLength={1000}
              />
              <div className="text-xs text-gray-500 mt-1">
                {bodyText.length}/1000 characters
              </div>
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                Main Link URL
              </label>
              <input
                id="link"
                type="url"
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-200"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Additional References
                </label>
                <button
                  type="button"
                  onClick={handleAddReference}
                  className="px-3 py-1.5 bg-main text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm font-medium transition-colors duration-200 self-start sm:self-auto"
                >
                  Add Reference URL
                </button>
              </div>

              <div className="space-y-3">
                {references.map((ref, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      placeholder={`Reference URL ${index + 1}`}
                      value={ref}
                      onChange={(e) => handleReferenceChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-200"
                    />
                    {references.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveReference(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs font-medium transition-colors duration-200"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex justify-center sm:justify-end">
            <button
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-main text-white rounded-xl text-sm sm:text-base font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
              onClick={handleSubmit}
              disabled={isSubmitting || !title.trim() || !bodyText.trim()}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Posting...
                </div>
              ) : (
                "Create Post"
              )}
            </button>
          </div>
        </div>

        {post.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Posts</h2>
            <div className="space-y-4">
              {post.map((p, index) => (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-main mb-2">{p.title}</h3>
                  <p className="text-gray-700 mb-3">{p.bodyText}</p>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-main hover:underline text-sm">
                      {p.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}