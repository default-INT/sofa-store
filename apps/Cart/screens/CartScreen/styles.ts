import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

const CIRCLE_SIZE = 6;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.white,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    paddingVertical: 16,
  },
  card: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    boxShadow: '0px 5px 5px 0px #00000024',
    marginBottom: 40,
  },
  list: {
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  separatorWrapper: {
    position: 'relative',
    marginHorizontal: 32,
    paddingVertical: CIRCLE_SIZE,
  },
  separator: {
    position: 'relative',
    height: 1,
    width: '100%',
    backgroundColor: theme.primarySeparator,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: theme.primarySeparator,
    zIndex: CIRCLE_SIZE,
    overflow: 'visible',
  },
  leftCircle: {
    position: 'absolute',
    left: (CIRCLE_SIZE / 2) * -1,
    top: (CIRCLE_SIZE / 2),
  },
  rightCircle: {
    position: 'absolute',
    right: (CIRCLE_SIZE / 2) * -1,
    top: (CIRCLE_SIZE / 2),
  },
  summary: {
    marginVertical: 16,
    paddingVertical: 16,
    gap: 10,
    marginHorizontal: 32,
  },
  summaryField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  summaryLabel: {
    fontFamily: Fonts.Inter400,
    fontSize: 16,
    fontWeight: 400,
  },
  fieldValue: {
    fontFamily: Fonts.Inter400,
    fontSize: 20,
    fontWeight: 400,
  },
  summaryValue: {
    fontFamily: Fonts.Inter500,
    fontSize: 20,
    fontWeight: 500,
  },
  buttonContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 20,
    color: theme.white,
  },
});
