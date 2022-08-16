export default async function getRewardByCounterValue(counterValue) {
  // this can evenutally make an API call to
  // get the corresponding reward value
  // Right now, having a mock implimention
  // to calculate reward value based on the counterValue

  return new Promise(resolve => {
    setTimeout(() => {
      let rewardValue;
      if (counterValue < 3) {
        rewardValue = 0;
      } else if (counterValue % 7 === 0) {
        rewardValue = 50;
      } else if (counterValue % 5 === 0) {
        rewardValue = 30;
      } else if (counterValue > 10) {
        rewardValue = 10;
      } else {
        rewardValue = 0;
      }
      resolve({
        data: rewardValue,
      });
    }, 900); // simulating n/w delay of 900ms
  });
}
