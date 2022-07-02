window.addEventListener('load', function(){

  const ary2tbody=(a,b =document.createElement('tbody'))=>a.reduce((b,a)=>(a.reduce((c,d)=>(c.insertCell().append(d),c),b.insertRow()),b),b);

  function Calcs () {
    const {floor:int , ceil} = Math;  
    let [a, b, c] = Array.from(input.querySelectorAll ('input[type="number"]'),a=> a.valueAsNumber || 0);
    let r = int (a / ((c + 1) ** b)); // 資産の計算式
    let g = [ ];
  
    // 負債側の計算結果を配列に格納
    for (let i = 0, rd = r; i < b; i++)
      g.push ([i + 1, ceil(r / b).toLocaleString(), (rd += ceil (rd * 0.01)).toLocaleString()]);  
  
    [...data.tBodies].forEach (e=> e.remove ());
  
    data.appendChild (ary2tbody (g));
    result.value = r.toLocaleString();
  };
  calc.addEventListener ('click', Calcs, false);
});


  // a = 資産除去費用
  // b = 使用期間
  // c = 利率