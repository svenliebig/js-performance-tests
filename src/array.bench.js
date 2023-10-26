import { afterEach } from "vitest";
import { beforeEach } from "vitest";
import { bench, describe } from "vitest";

describe("array", () => {
  let arr = [];
  const el = () => void 0

  describe("empty array", () => {
    beforeEach(() => {
      arr = []
    })

    bench("push element and remove it (push, splice)", () => {
      arr.push(el);
      arr.splice(arr.findIndex((e) => e === el), 1);
    })

    // fastest
    bench("push element and remove it (copy and filter)", () => {
      arr = [...arr, el];
      arr = arr.filter((e) => e !== el);
    })
  })

  describe("array with 10 elements", () => {
    beforeEach(() => {
      arr = [
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0,
        () => void 0
      ]
    })

    bench("push element and remove it (push, splice)", () => {
      arr.push(el);
      arr.splice(arr.findIndex((e) => e === el), 1);
    })

    // fastest
    bench("push element and remove it (copy and filter)", () => {
      arr = [...arr, el];
      arr = arr.filter((e) => e !== el);
    })
  })
})
