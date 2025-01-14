# React Native useEffect Async Operation Race Condition Bug

This repository demonstrates a common but subtle bug in React Native related to asynchronous operations within the `useEffect` hook.  The bug arises when an asynchronous operation initiated inside `useEffect` isn't properly handled, potentially leading to unexpected behavior or race conditions if the component unmounts before the asynchronous operation completes. 

## Bug Description

The primary issue is the lack of proper cleanup or handling of asynchronous operations within `useEffect`.  If the component unmounts before the asynchronous task finishes, the state update may still be executed, leading to errors.  This becomes critical when dealing with network requests or other long-running operations.

## Solution

The provided solution demonstrates how to utilize the cleanup function of `useEffect` to cancel any pending asynchronous operations if the component is unmounted. This ensures that no state updates occur after the component is unmounted.