# Fast or Feast

FAST OR FEAST helps me stick to my weight loss plan by communicating if today is an intermittent fasting day, a reward day, or a full fasting day. This app also calculates how many hours are left in my eating window for intermittent fasting days, which opens at 10AM and closes at 5PM. Saturdays are REWARD DAYS, which means there are no rules and that I can eat with no restrictions only on this day. Sundays are FULL FASTING DAYS, which means no eating whatsoever. 

## Global Variables:

* currentTime (Number): Represents the current hour, using a 24 hour clock. Range is 0 - 24.
* currentDay (String): contains the current day of the week.
* rewardDay (Boolean): Returns true if eatingDay is Sat, false if not. 
* fullFastDay (Boolean): Returns true if eating day is Sun, false if not.

## Decision Making Process:

* If the currentDay is a weekday, then the app tells you it is an intermittent fasting day. 
* If the currentDay is Saturday, then the app tells you it is a Reward day.
* If the currentDay is Sunday, then the app tells you it is a Full Fasting day.
* If it is an intermittent fasting day, and between 10am to 5pm, then the app tells you how many hours are left inside the eating window. 

## Output

* Today is {weekday}, a(n) Intermittent Fasting day. At {currentTime}, there is X hours remaining in your eating window.
* Today is Saturday, a Reward day.
* Today is Sunday, a Full Fasting day. 



## Daily Diet Plan
* Monday - Eating window 10am - 5pm.
* Tuesday - Eating window 10am - 5pm.
* Wednesday - Eating window 10am - 5pm.
* Thursday - Eating window 10am - 5pm.
* Friday - Eating window 10am - 5pm.
* Saturday - Can eat at any time from 12:00am to 11:59pm.
* Sunday - Fast all day from 12:00am to 11:59pm.