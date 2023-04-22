import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToWhatchComponent } from './what-to-whatch.component';

describe('WhatToWhatchComponent', () => {
  let component: WhatToWhatchComponent;
  let fixture: ComponentFixture<WhatToWhatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatToWhatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatToWhatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
