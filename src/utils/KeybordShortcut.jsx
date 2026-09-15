import React from 'react'

const KeybordShortcut = (func) => {
    // Keyboard shortcut: N
      useEffect(() => {
        const handleKeyDown = (e) => {
          // Check if 'N' key is pressed (not in an input/textarea)
          if (
            e.key === "/" &&
            e.ctrlKey &&
            !e.metaKey &&
            !e.altKey &&
            !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
          ) {
            handleCreateNote();
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, [handleCreateNote]);
  
}

export default KeybordShortcut