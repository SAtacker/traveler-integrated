export default {
  content: [
    {
      type: 'row',
      content: [{
        type: 'column',
        content: [{
          type: 'component',
          componentName: 'TreeView',
          componentState: {}
        }]
      }, {
        type: 'column',
        content: [{
          type: 'component',
          componentName: 'CodeView',
          componentState: {}
        }]
      }, {
        type: 'column',
        content: [{
          type: 'component',
          componentName: 'GanttView',
          componentState: {}
        }]
      }]
    }
  ]
};