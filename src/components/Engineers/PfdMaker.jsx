import { useRef, useState, useEffect } from 'react';

export default function PfdMaker() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const containerWidth = container.clientWidth;
      const containerHeight = Math.min(500, window.innerHeight * 0.6);
      
      canvas.width = containerWidth;
      canvas.height = containerHeight;
      
      ctx.strokeStyle = '#0E47A1';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const getEventPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Handle both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const pos = getEventPos(e);
    setIsDrawing(true);
    setStartPos(pos);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (tool === 'pen') {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getEventPos(e);
    
    if (tool === 'pen') {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getEventPos(e);
    
    if (tool === 'rectangle') {
      const width = pos.x - startPos.x;
      const height = pos.y - startPos.y;
      ctx.strokeRect(startPos.x, startPos.y, width, height);
    } else if (tool === 'circle') {
      const radius = Math.sqrt(
        Math.pow(pos.x - startPos.x, 2) + Math.pow(pos.y - startPos.y, 2)
      );
      ctx.beginPath();
      ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    } else if (tool === 'line') {
      ctx.beginPath();
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
    
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="w-full mx-auto py-8 md:py-12 lg:py-20 bg-background flex flex-col items-center min-h-screen px-4">
      <h2 className="text-main font-semibold text-xl sm:text-2xl lg:text-3xl mb-6 md:mb-8 text-center">
        PFD Maker
      </h2>
      
      <div className="bg-white border-2 w-full max-w-6xl border-main rounded-lg shadow-lg overflow-hidden">
        
        <div className="bg-gray-50 border-b border-gray-200 p-2 sm:p-3 flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() => setTool('rectangle')}
              className={`p-1.5 sm:p-2 rounded border-2 transition-all ${
                tool === 'rectangle' 
                  ? 'border-main bg-blue-50 text-main' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              title="Rectangle"
            >
              <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              </svg>
            </button>
            
            <button
              onClick={() => setTool('circle')}
              className={`p-1.5 sm:p-2 rounded border-2 transition-all ${
                tool === 'circle' 
                  ? 'border-main bg-blue-50 text-main' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              title="Circle"
            >
              <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9"/>
              </svg>
            </button>
            
            <button
              onClick={() => setTool('pen')}
              className={`p-1.5 sm:p-2 rounded border-2 transition-all ${
                tool === 'pen' 
                  ? 'border-main bg-blue-50 text-main' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              title="Pen"
            >
              <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </button>
            
            <button
              onClick={() => setTool('line')}
              className={`p-1.5 sm:p-2 rounded border-2 transition-all ${
                tool === 'line' 
                  ? 'border-main bg-blue-50 text-main' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              title="Line"
            >
              <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="20" x2="20" y2="4"/>
              </svg>
            </button>
          </div>
          
          <div className="h-4 sm:h-6 w-px bg-gray-300"></div>
          
          <button
            onClick={clearCanvas}
            className="p-1.5 sm:p-2 rounded border-2 border-gray-300 hover:border-gray-400 transition-all"
            title="Clear Canvas"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
        
        <div className="relative w-full">
          <canvas
            ref={canvasRef}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] cursor-crosshair bg-white block touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            style={{ touchAction: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}