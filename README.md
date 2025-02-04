# MongoDB $inc Operator Unexpected Behavior with Negative Values

This repository demonstrates a common issue encountered when using the `$inc` operator in MongoDB's `updateOne` method with negative values.  The issue is that the `$inc` operator, when used with a negative value, may not correctly decrement the field if there is a data type mismatch or other unexpected edge case related to how the data is being handled by the $inc operation.

## Bug Description
The provided code snippet aims to decrement the age field in a MongoDB document.  However, due to an incorrect handling of the update operation or data type issues, the intended decrement may not occur. The bug is found in how the age field is handled, specifically when using negative values in the $inc operation. Possible issues include type mismatch or improper data handling by the $inc operator.

## Solution
The solution addresses the potential issues by explicitly converting the age field value to a number before performing the decrement. This ensures proper data type handling for numerical operations within the $inc operator.  Additionally, error handling and validation have been added to prevent unforeseen behaviors.