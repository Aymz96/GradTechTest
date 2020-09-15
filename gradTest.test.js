function createMenuData(data) { 
	const result = []; //creating a vriable empty list
  data.forEach(string_in_data => { //loop string in data
    const parent = string_in_data.split('/'); // seperating the string and storing it in parent variable
    if (parent.length == 2){ // if elements == 2
      const to_sort = result.find(each_parent => {
        return each_parent.title == parent[0]
      })
      if (to_sort){
        to_sort.data.push(parent[1]);
      }
      else {
        result.push({
          title:parent[0],
          data:[parent[1]]
        })
      }
    }
  })
  return result
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];

      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];

      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });
