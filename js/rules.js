var slides = [
	{
		title : [
			"Rubik's Cube Competition",
			"Judge Training",
			"Part I"
		],
	},
	{
		title : ["Competition Format"],
		contents : [
			"Average of 5: For each event, the competitors are allotted 5 attempts. Of these 5 attempts, \
			the best and worst attempts are removed, \
			and the arithmetic mean of the remaining 3 attempts counts for the competitor’s ranking in the round.",
			"(Scrambler scrambles the puzzle,<br>then competitor solves the puzzle) -- Repeat for 5 times"
		]
	},
	{
		title : ["Step 1: Collect Puzzle"],
		contents : [
			"Collect the puzzle and the scoresheet from scrambling area",
			"Check the puzzle to ensure that there is no misalignments",
			"Cover the puzzle with the box and make sure no one can see",
			"Puzzle should be always with the correct scoresheet"
		]
	},
	{
		title : ["Step 2: Call the competitor"],
		contents : [
			"Call the NO. on the scoresheet. The competitor may choose any vacant seat",
			"Or you can choose the table first, and put the puzzle covered by the box on the table\
			<br> Then call the competitor to come to the table",
			"If no response, try to call the name"
		]
	},
	{
		title : ["Step 3: Check the competitor"],
		contents : [
			"While competing, competitors must not use electronics or audio equipment",
			"Competitors may use certain non-electronic aids that do not give the competitor an unfair advantage. This includes:",
			"Glasses, wrist brace, hearing aids",
			"Earplugs and earmuffs"
		]
	},
	{
		title : ["Step 3: Check the competitor"],
		contents : [
			"Competitors may use cameras at the solving station,\
			 but the following restrictions apply from the beginning of the attempt until the competitor stops the solve." + dnf() +
			 unorderdList([
			 	"Each camera monitor must be blank or out of sight of the competitor",
			 	"The competitor must not interact with (e.g. operate, hold, wear) any active camera.\
			 	Exception: the competitor may wear a camera mounted on their head, as long as it is out of their sight and it is clear that they are not interacting with it"
			 ])
		]
	},
	{
		title : [
			"Step 4:",
			"Reset the stopwatch",
			"Reset the timer",
			],
		contents : [
			"Ask whether the competitor is ready",
			"The competitor must be ready to start the attempt within one minute of being called, <br>else the competitor forfeits the attempt " + dns()
		]
	},
	{
		title : ["Step 5: Watch the attempt"],
		contents : [
			"When the competitor confirms his readiness <br> Uncover the puzzle by removing the box<br>and start the stopwatch exactly after uncovering",
			"This is the beginning of the " + keyword("Inspection")
		]
	},
	{
		title : ["Step 5: Watch the attempt (Inspection)"],
		contents : [
			"The competitor may pick up the puzzle during inspection.",
			"The competitor must not apply moves during inspection." + dnf(),
			"When 8 seconds of inspection have elapsed, the judge calls '8 SECONDS'",
			"When 12 seconds of inspection have elapsed, the judge calls '12 SECONDS'"
		]
	},
	{
		title : ["Step 5: Watch the attempt (Inspection)"],
		contents : [
			"The competitor must start the solve within " + keyword("15 seconds") + " of the beginning of the inspection",
			"If the competitor starts the solve " + keyword("between 15 to 17 seconds") + " after the beginning of the inspection." + p2(),
			"If the competitor " + keyword("does not start the solve within 17 seconds") + " of the beginning of the inspection." + dnf()
		]
	},
	{
		title : ["Step 5: Watch the attempt (Inspection)"],
		contents : [
			"Inspection only ends when the competitor " + keyword("release their hands") + " from the timer.",
			"Record penalties under the 'Inspection' column." + img('inspection')
		]
	},
	{
		title : ["Step 5: Watch the attempt (Starting)"],
		contents : [
			"After inspection, the competitor places the puzzle on the mat, in any orientation and position.",
			"The puzzle must not rest on the timer." + p2(),
			"The competitor uses their fingers to touch the elevated sensor surfaces of the timer.\
			The competitor’s palms must be facing down." + p2(),
			"The competitor must have no physical contact with the puzzle between the inspection period and the beginning of the solve." + p2(),
		],
	},
	{
		title: ["Step 5: Watch the attempt (Starting)"],
		contents : [
			
			"Time penalties for starting the solve are cumulative.",
			"Record penalties under the 'Starting' column." + img('starting')
		]
	},
	{
		title: ["Step 5: Watch the attempt (Solving)"],
		contents : [
			"If the timer stops before the end of the solve, and the timer " +
			unorderdList([
				"displays a time " + keyword("strictly below 0.06 seconds") + 
				",<br>then the attempt is replaced by an extra attempt.",
				"displays a time of " + keyword("0.06 seconds or higher") +
				",<br>then the attempt is <b class='dnf'>disqualified (DNF)</b>."
			])
		]
	},
	{
		title: ["Step 5: Watch the attempt (Solving)"],
		contents : [
			"While inspecting or solving, the competitor must NOT:" +
			unorderdList([
				"communicate with anyone other than the judge." + dnf(),
				"receive assistance from anyone or any object other than the surface. (Including you, the judge)" + dnf()
			])
		]
	},
	{
		title: ["Step 5: Watch the attempt (Solving)"],
		contents : [
			"A competitor participating in an event must be able to fulfil the event’s requirements (e.g. know how to solve the puzzle).<br>\
			A competitor must not compete with expectation of a DNF result or an intentionally poor result." + dnf(),
			"And please inform the chief judge when this happens."
		]
	},
	{
		title: ["Step 5: Watch the attempt<br> (Puzzle defects)"],
		contents : [
			"Examples of puzzle defects include: popped parts, pieces twisted in place, and detached screws/caps/stickers.",
			"If a puzzle defect occurs during an attempt, the competitor may choose to either" + 
			unorderdList([
				"repair the defect and continue the attempt",
				"or to stop the attempt " + "<b class='dnf'>(DNF)</b>."
			])
		]
	},
	{
		title: ["Step 5: Watch the attempt<br> (Puzzle defects)"],
		contents : [
			"If a competitor chooses to repair the puzzle, they must repair only the defective parts.\
			<br>Tools and/or parts of other puzzles must not be used to repair the original puzzle." + dnf(),
		]
	},
	{
		title: ["Step 5: Watch the attempt<br> (Puzzle defects)"],
		contents : [
			"Permitted repairs:" +
			unorderdList([
				"If any parts have fallen out or moved out of place, the competitor may place them back.",
				"If, after repairing the puzzle but before the end of the attempt, the competitor finds that the puzzle is unsolvable,\
				they may disassemble and reassemble " +  keyword("a maximum of 4 pieces") +" to make the puzzle solvable.",
				"If the puzzle is unsolvable, and can be made solvable by " +keyword("rotating a single corner piece") +
				" the competitor may correct the corner piece by twisting it in place without disassembling the puzzle."
			])
		]
	},
	{
		title: ["Step 5: Watch the attempt (Solving)"],
		contents : [
			"If the competitor is disqualified for the attempt <b class='dnf'>(DNF)</b> before stopping the solve,\
			the judge should acknowledge the competitor immediately.",
			"The competitor may choose to still finish solving the puzzle, or give up."
		]
	},
	{
		title: ["Step 5: Watch the attempt (Stopping)"],
		contents : [
			"The competitor stops the solve by releasing the puzzle and then stopping the timer.",
			"The competitor is responsible for stopping the Stackmat timer correctly.",
			"If the timer accidentally reset during the action of stopping," + dnf() +
			"<br>Unless the competitor can prove the timer is faulty"
		]
	},
	{
		title: ["Step 5: Watch the attempt (Stopping)"],
		contents : [
			"The competitor must:" + 
			unorderdList([
				"Fully release the puzzle before stopping the solve." + p2(),
				"Stop the timer using both hands, placed flat on the sensors with palms down." + p2(),
				"NOT touch the puzzle until the judge has inspected the puzzle." + dnf() +
				"<br>If the judge is sure that no moves have been applied, a " + "<b class='p2'>time penalty (+2 seconds)</b>" + " may be assigned instead",
				"Not reset the timer until the judge has recorded the result." + dnf(),
			])
		]
	},
	{
		title: ["Step 5: Watch the attempt (Stopping)"],
		contents : [
			"Time penalties for stopping the solve are cumulative.",
			"Record penalties under the 'Stopping' column." + img('stopping')
		]
	},
	{
		title: ["Step 6: Check the puzzle"],
		contents : [
			"If at the end of the attempt some parts of the puzzle are physically detached or not fully placed, generally give" + dnf(),
			"If " + keyword("only ONE part with ONE coloured face") +" is affected, the puzzle is considered solved.",
			" When checking whether there is any penalty in the solved state, " + 
			keyword("the judge can only observe the puzzle, but not touch it.")
		]
	},
	{
		title: ["Step 6: Check the puzzle"],
		contents : [
			"For each two adjacent parts (e.g. two parallel, adjacent slices of a cube) of the puzzle that are misaligned " + 
			keyword(" more than 45 degrees") +
			", the puzzle is considered to require " + keyword("one additional move") +" to solve",
			"If one move is required, the puzzle is be considered solved with a" + p2(),
			"If more than one move is required, the puzzle is considered unsolved" + dnf(),
			
		]
	},
	{
		title: ["Step 6: Check the puzzle"],
		contents : [
			"Record penalties under the 'Solved State' column." + img('solved_state')
		]
	},
	{
		title: ["Step 7: Record result"],
		contents : [
			"Write the displayed time from the timer under the column of ‘Displayed time’ on the scoresheet.<br>" + 
			keyword("No matter") + " whether there is any penalties" + img('display')
		]
	},
	{
		title: ["Step 7: Record result"],
		contents : [
			"State the reason(s) for each penalty (if any) to the competitor.",
			"Write the final result after adding all the penalties under the column of ‘Final Result’ on the scoresheet" + img('final')
		]
	},
	{
		title: ["Step 7: Record result"],
		contents : [
			"The judge write down the " + keyword("Initial"),
			"The competitor check the result and sign",
			"The competitor must not sign an attempt on the scoresheet before the judge has recorded the final result for that attempt.",
			"If a competitor signs (or otherwise marks) an attempt before they have begun it, \
			or before the judge has finished recording the result, they forfeit the attempt and the result will be considered " + dns()
		]
	},
	{
		title: ["Step 8: After recording", "Reset the timer!!!"],
		contents : [
			"For events using 3x3 or 2x2, ask the competitor to stay at the table to wait for the next solve.",
			"Otherwise (for 4x4), ask the competitor to leave the table and only come back if he is called for the next solve."
		]
	},
	{
		title: ["Step 9: Return"],
		contents : [
			"If this is not the last (5th) attempt:",
			"Put the solved puzzle back into the box",
			"Return the puzzle and scoresheet to the scrambling area"
		]
	},
	{
		title: ["Step 10: Check cutoff"],
		contents : [
			"Cutoff time for each event are different:" + img('cutoff1') + 
			"<br>You can refer to the PPT during the competition for the cutoff of the current event"
		]
	},
	{
		title: ["Step 10: Check cutoff"],
		contents : [
			"Repeat Step 1 to Step 9. After the " + keyword("second attempt") + " for a competitor:",
			"If both of the final results exceed the cutoff time for the event, \
			(a DNF is regarded as exceeding the cutoff time) the competitor is disqualified for the remaining three attempts",
			"(the result for the remaining three attempts should be " + keyword("left as empty") + ")",
			"If at least one of the final results is within the cutoff time for the event, \
			the competitor is qualified for the remaining attempts."
		]
	},
	{
		title: ["Extra Attempt?"],
		contents : [
			"If the competitor is given one or more extra attempts for any reason, which includes (but not limited to):" +
			unorderdList([
				"Timer stop before 0.06 seconds",
				"Timer low battery",
				"Timer not reset before starting the attempt"
			]),
			"The result for the corresponding attempt should be " + keyword("Marked with 'E' in Displayed Time") + ". The other regularly numbered attempts should be completed first.",
			"And extra attempts should be done afterwards.\
			The results from the extra attempts should replace the regularly numbered attempts that caused them, in increasing order."
		]
	},
	{
		title: ["Step 11: Repeat"],
		contents : [
			"After the last (5th) Attempt:",
			"Return the puzzle to the competitor",
			"Return the scoresheet to the score taker",
			"...<br>Re-start from step 1"
		]
	},
];

renderSlides(slides);

