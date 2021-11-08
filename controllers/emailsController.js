// const cron = require('node-cron');

const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const email = require('./../utils/email');

exports.sendEmails = catchAsync(async (req, res, next) => {
  const users = await User.find();
  users.forEach((user) => {
    if (user.friends) {
      const friends = user.friends;
      friends.map(async (friend) => {
        // console.log(friend);
        const date = new Date(friend.dateOfEvent);
        const currDate = new Date().getDate();
        // console.log(date.getDate())
        // console.log(currDate)
        if (date.getDate() === currDate) {
          console.log(`Today is the ${friend.event} of the friend ${friend.name}.`);
          // await email(`${friend.event}`, friend, 'abcdefgh');
        }
      });
      res.json(friends);
    }
  });
});

// exports.sendEmails = () => cron.schedule(
//   `1 * * * *`,
//   catchAsync(async (req, res, next) => {
//     const users = await User.find();
//     users.forEach((user) => {
//       if (user.friends) {
//         const friends = user.friends;
//         friends.map(async (friend) => {
//           // console.log(friend);
//           const date = new Date(friend.dateOfEvent);
//           const currDate = new Date().getDate();
//           // console.log(date.getDate())
//           // console.log(currDate)
//           if (date.getDate() === currDate) {
//             console.log(`Today is the day for the friend ${friend.name}.`);
//             await email(`${friend.event}`, friend, 'abcdefgh');
//           }
//         });
//         res.json(friends);
//       }
//     });
//   })
// );