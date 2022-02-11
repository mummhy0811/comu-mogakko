const n=[1, 2, 3, 4, 5, 6, 7, 8, 9];

function Calc({number}) {
  return (
    n.map(num => 
        <div>
            {number} * {num} = {number * num}
        </div>)
  );
}

export default Calc;