import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

const quantityLabel = {
  1: 'faible',
  2: 'modéré',
  3: 'important',
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${
            careType === 'light' ? 'un ensoleillement' : 'un arrosage'
          } ${quantityLabel[scaleValue]}.`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
