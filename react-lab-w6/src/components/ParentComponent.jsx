// src/components/ParentComponent.jsx
import React, { useState, useCallback } from 'react';

// 1. ครอบ Component ด้วย React.memo เพื่อให้มัน re-render เฉพาะเมื่อ props เปลี่ยน
const HeavyCalculationComponent = React.memo(({ onCalculate }) => {
  console.log('HeavyCalculationComponent is rendering!');
  return <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" onClick={onCalculate}>Perform Heavy Calculation</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  // 2. ใช้ useCallback เพื่อ "จำ" ฟังก์ชัน performCalculation
  //    เนื่องจาก dependency array เป็น [] ฟังก์ชันนี้จะถูกสร้างขึ้นเพียงครั้งเดียว
  //    และจะไม่เปลี่ยนเมื่อ ParentComponent re-render
  const performCalculation = useCallback(() => {
    // สมมติว่านี่คือการคำนวณที่หนักมาก
    console.log("Performing calculation...");
  }, []); // Dependency array ว่างเปล่า

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Topic 5: Performance Optimization</h2>
      <div className="mb-4">
        <p className="text-lg">Unrelated Counter: <span className="font-bold">{count}</span></p>
        <button className="mt-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300" onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
      <hr className="my-4" />
      <p className="mb-2">This button's component should not re-render when the counter changes:</p>
      <HeavyCalculationComponent onCalculate={performCalculation} />
    </div>
  );
}

export default ParentComponent;