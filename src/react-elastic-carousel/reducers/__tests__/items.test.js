import { firstItemReducer } from "../items";
import { nextItemAction, prevItemAction } from "../../actions/itemsActions";

describe("firstItemReducer", () => {
  it("returns default state", () => {
    const currentIndex = 5;
    const nextIndex = firstItemReducer(currentIndex, {});
    expect(nextIndex).toEqual(currentIndex);
  });

  it("get +1 index", () => {
    const currentIndex = 3;
    const limit = 5;
    const itemsToScroll = 1;
    const action = nextItemAction(limit, itemsToScroll);
    const nextIndex = firstItemReducer(currentIndex, action);
    expect(nextIndex).toEqual(currentIndex + 1);
  });

  it("get -1 index", () => {
    const currentIndex = 3;
    const limit = 0;
    const itemsToScroll = 1;
    const action = prevItemAction(limit, itemsToScroll);
    const nextIndex = firstItemReducer(currentIndex, action);
    expect(nextIndex).toEqual(currentIndex - 1);
  });

  it("itemsToScroll", () => {
    const currentIndex = 3;
    const limit = 5;
    const itemsToScroll = 2;
    const action = nextItemAction(limit, itemsToScroll);
    const nextIndex = firstItemReducer(currentIndex, action);
    expect(nextIndex).toEqual(limit);
  });

  it("get last or first index if out of boundries", () => {
    const currentIndex = 3;
    const itemsToScroll = 5;

    // next
    const topLimit = 5;
    const nextAction = nextItemAction(topLimit, itemsToScroll);
    const nextIndex = firstItemReducer(currentIndex, nextAction);

    // prev
    const startLimit = 0;
    const prevAction = prevItemAction(startLimit, itemsToScroll);
    const prevIndex = firstItemReducer(currentIndex, prevAction);

    // assert
    expect(nextIndex).toEqual(topLimit);
    expect(prevIndex).toEqual(startLimit);
  });
});
