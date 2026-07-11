# Quest completion is one-way and immutable

Typical to-do apps let you edit or un-complete an item at any time. We deliberately don't: a Quest can be edited or deleted only while incomplete, and completing it is a one-way action with no undo.

This avoids XP-farming (complete → uncomplete → complete) and the design complexity of a Character's Level decreasing after the fact. The cost is that a mis-click completion can't be undone in the MVP — accepted as a reasonable tradeoff for now.
