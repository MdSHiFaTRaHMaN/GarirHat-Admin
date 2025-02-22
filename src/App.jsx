
const onFinish = (values) => {
  const cardata = {
features: [
            "Electric Seats",
            "Memory Seats",
            "Gesture Control"
        ]
  };
  console.log("cardata", cardata);
};


<Form form={form} layout="vertical" onFinish={onFinish} onValuesChange={handlePriceChange}>

        {/* Safety Feature  */}
        <Collapse
          items={[
            {
              key: "1",
              label: "Safety Features",
              children: (
                <Form.Item name="safetyFeatures">
                  <button
                    onClick={() => setIsFetureAddModel(true)}
                    className="text-TextColor bg-gray-100 p-1 rounded font-semibold"
                  >
                    + Add Custom Feature
                  </button>
                  {/* Search Input */}
                  <Input
                    className="my-3 py-[10px]"
                    placeholder="Search Feature"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  {/* Checkbox Group */}
                  <Checkbox.Group className="grid grid-cols-4">
                    {isLoadingFeature ? (
                      <span>Loading</span>
                    ) : (
                      filteredFeatures.map((feature) => (
                        <Checkbox key={feature.id} value={feature.feature_name}>
                          {feature.feature_name}
                        </Checkbox>
                      ))
                    )}
                  </Checkbox.Group>
                </Form.Item>
              ),
            },
          ]}
        />
       
<Form.Item>
  <Button
    htmlType="submit"
    className="w-full mt-5 bg-ButtonColor hover:!bg-ButtonHover hover:!text-white font-semibold text-white py-5"
  >
    Submit
  </Button>
</Form.Item>
</Form>