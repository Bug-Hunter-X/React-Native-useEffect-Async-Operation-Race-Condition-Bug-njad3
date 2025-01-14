The solution involves using the cleanup function provided by the `useEffect` hook to cancel any in-flight requests or operations.

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // AbortController to cancel request
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Clean up operation
    };
  }, []);

  // ... rest of the component remains the same
};

export default MyComponent;
```

By using `AbortController`, we can cancel the fetch request if the component unmounts before the request completes. This prevents potential errors and ensures a cleaner lifecycle management for the component.