import { Component } 	from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
	values = 'Morals are part of your values and are pretty consistent with most people. But there’s more to it than morals. Some people value consistency while others value change. Some value risk while others value stability. Knowing your values is critical to setting satisfying goals.'
	strengths = 'Play to your strengths and be yourself. Knowing what you’re good at and using those talents will lead to greater success AND satisfaction than trying to “fix” your weaknesses.'
	harmony = 'Quit trying to find “balance” – that implies a zero sum game where one part of you has to sacrifice for the benefit of the other parts. Instead, figure out how to pull it all together to have it all without sacrificing anything.'
	constructor() { }

	popup(type) {
		if(type===1) return confirm(this.values);
		if(type===2) return confirm(this.strengths);
		if(type===3) return confirm(this.harmony);
	}
}
