import { useContextSelector } from 'use-context-selector';
import {counterContext } from './provider';

function useCounterHook() {
    const count1 = useContextSelector(counterContext, v => {
        return v.count.count1
    });
    const setState = useContextSelector(counterContext, v => v.setCount);
    const increment = () => setState(s => {
        return {
            ...s,
            count1: s.count1 + 1,
        }
    });

    return {
        count1,
        increment
    }
}

function Counter1() {
    const { count1, increment } = useCounterHook()
    
    return (
        <div>
        <span>Count1: {count1}</span>
        <button type="button" onClick={increment}>+1</button>
      </div>
    )
}


function Counter2() {
    const count2 = useContextSelector(counterContext, v => v.count.count2);
    const setState = useContextSelector(counterContext, v => v.setCount);
    const increment = () => setState(s => {
        return {
            ...s,
            count2: s.count2 + 1,
        }
    });

    
    return (
        <div>
        <span>Count2: {count2}</span>
        <button type="button" onClick={increment}>+1</button>
      </div>
    )
}


export default function AboutScreen() {
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
            <Counter1 />
            </div>
            <Counter2 />
        </div>
    )
}