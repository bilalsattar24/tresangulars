import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcdpsComponent } from './editcdps.component';

describe('EditcdpsComponent', () => {
  let component: EditcdpsComponent;
  let fixture: ComponentFixture<EditcdpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcdpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcdpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
