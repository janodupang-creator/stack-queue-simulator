# Stack and Queue Simulators

Two standalone browser applications for the Week 12–13 activity. Open each `index.html` directly in a browser; no dependencies or build step are required.

## Files

- `index.html`, `styles.css`, and `app.js` — LIFO stack with Push, Pop, Peek, and Clear.
- `queue-simulator/` — FIFO queue with Enqueue, Dequeue, Peek, and Clear. The front is shown first and the rear last.

Open the root `index.html` for the stack, or `queue-simulator/index.html` for the queue.

## Queue verification sequence

Enqueue 100, 200, and 300; Peek; Dequeue; Enqueue 400; Dequeue; Clear; then try Dequeue and Peek while empty. The queue should preserve the expected FIFO order and show helpful messages for empty operations. Also try 100, 100, and 200 to verify duplicates are preserved.

This is a locally prepared project. It has not been committed or pushed to GitHub, turned in on Teams, or recorded as a video.
